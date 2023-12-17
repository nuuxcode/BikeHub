-- AlterTable
ALTER TABLE "Bike" ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "Park" ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "Rental" ADD COLUMN     "order_id" TEXT,
ADD COLUMN     "payment_id" TEXT,
ADD COLUMN     "qrcode" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT;
