/*
  Warnings:

  - You are about to drop the column `productsId` on the `cart` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_productsId_fkey`;

-- AlterTable
ALTER TABLE `cart` DROP COLUMN `productsId`;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `cartId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_cartId_fkey` FOREIGN KEY (`cartId`) REFERENCES `Cart`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
