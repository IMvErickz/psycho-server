/*
  Warnings:

  - You are about to drop the `_productstoshoppingcart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_productstoshoppingcart` DROP FOREIGN KEY `_ProductsToShoppingCart_A_fkey`;

-- DropForeignKey
ALTER TABLE `_productstoshoppingcart` DROP FOREIGN KEY `_ProductsToShoppingCart_B_fkey`;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `shoppingCartId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `_productstoshoppingcart`;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_shoppingCartId_fkey` FOREIGN KEY (`shoppingCartId`) REFERENCES `ShoppingCart`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
