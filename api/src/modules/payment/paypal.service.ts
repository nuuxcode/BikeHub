import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class PaypalService {
  private readonly base = 'https://api-m.sandbox.paypal.com';
  private readonly clientId = process.env.PAYPAL_CLIENT_ID;
  private readonly clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  async generateAccessToken() {
    try {
      if (!this.clientId || !this.clientSecret) {
        throw new Error("MISSING_API_CREDENTIALS");
      }
      const auth = Buffer.from(
        this.clientId + ":" + this.clientSecret,
      ).toString("base64");
      const response = await fetch(`${this.base}/v1/oauth2/token`, {
        method: "POST",
        body: "grant_type=client_credentials",
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Failed to generate Access Token:", error);
    }
  }

  async createOrder(cart) {
    // use the cart information passed from the front-end to calculate the purchase unit details
    console.log("----------------");
    console.log("--------CREATE ORDER SERVICE--------");
    console.log("----------------");
    console.log(
      "shopping cart information passed from the frontend createOrder() callback:",
      cart,
    );

    const accessToken = await this.generateAccessToken();
    console.log("Access Token:", accessToken);
    const url = `${this.base}/v2/checkout/orders`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
        // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
        // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
        // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
        // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
      },
      method: "POST",
      body: JSON.stringify(cart),
    });

    console.log('createOrder response', await response.clone().json())
    return response.json()
  }


  async getApprovalLink(orderID) {
    return `https://www.sandbox.paypal.com/checkoutnow?token=${orderID}`;
  }

  async completeOrder(orderID) {
    console.log("----------------");
    console.log("--------COMPLETE ORDER SERVICE--------");
    console.log("----------------");
    const accessToken = await this.generateAccessToken();
    const url = `${this.base}/v2/checkout/orders/${orderID}/capture`;
    console.log('Order ID:', orderID)
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
        // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
        // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
        // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
        // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
      },
    });
    console.log('completeOrder response', await response.clone().json())
    return response.json()
  }

  // async handleResponse(response) {
  //   try {
  //     const jsonResponse = await response.json();
  //     return {
  //       jsonResponse,
  //       httpStatusCode: response.status,
  //     };
  //   } catch (err) {
  //     const errorMessage = await response.text();
  //     throw new Error(errorMessage);
  //   }
  // }
}
