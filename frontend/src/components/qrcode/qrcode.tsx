import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import { Button } from '@chakra-ui/react';
import * as htmlToImage from 'html-to-image';
import axios from "../../apis/axios";
import { da } from 'date-fns/locale';

interface Data {
    id: number;
    user_id: number;
    bike_id: number;
    start_time: string;
    end_time: string;
    status: string;
    price: number;
    qrcode: string;
    payment_id: number;
    order_id: number;
    userName: string;
    bikeModel: string;
    parkName: string;
    park_id: number;
}

const QRCodeComponent = ({ id, size }: { id: number, size?:number }) => {
    const [data, setData] = useState<Data | null>(null);
    const qrCodeRef = useRef(null);

    useEffect(() => {
        axios.get(`/rentals/rental/${id}`, {
            headers: {
                'User-Id': JSON.parse(localStorage.getItem('user') || '').id,
            },
            withCredentials: true
        })
            .then(response => {
                console.log("response.data", response.data)
                const { id, user_id, bike_id, start_time, end_time, status, price, qrcode, payment_id, order_id, User, Bike, Park } = response.data;
                setData({
                    id,
                    user_id,
                    bike_id,
                    start_time,
                    end_time,
                    status,
                    price,
                    qrcode,
                    payment_id,
                    order_id,
                    park_id: Bike.Park.id,
                    userName: User.name,
                    bikeModel: Bike.model,
                    parkName: Bike.Park.name
                });
                console.log("data", data)
            });
    }, [id]);

    const saveImage = () => {
        if (qrCodeRef.current) {
            htmlToImage.toPng(qrCodeRef.current)
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    if (data) {
                        link.download = `${data.user_id}-${data.id}-${data.park_id}-${data.bike_id}.png`;
                    } else {
                        link.download = `qrcode.png`;
                    }
                    link.href = dataUrl;
                    link.click();
                });
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {data && (
                <div style={{ marginTop: '20px' }} ref={qrCodeRef}>
                    <QRCode value={JSON.stringify(data)} size={size} />
                </div>
            )}
            <Button onClick={saveImage} style={{ marginTop: '20px' }}>Save QR Code</Button>
        </div>
    );
};

export default QRCodeComponent;
