/*
  Warnings:

  - You are about to drop the `_carttoproducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_carttoproducts` DROP FOREIGN KEY `_CartToProducts_A_fkey`;

-- DropForeignKey
ALTER TABLE `_carttoproducts` DROP FOREIGN KEY `_CartToProducts_B_fkey`;

-- AlterTable
ALTER TABLE `cart` ADD COLUMN `productsId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `_carttoproducts`;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `Products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
