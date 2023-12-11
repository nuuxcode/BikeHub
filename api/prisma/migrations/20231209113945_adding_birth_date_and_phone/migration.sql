/*
  Warnings:

  - Made the column `birthdate` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "birthdate" SET NOT NULL;
