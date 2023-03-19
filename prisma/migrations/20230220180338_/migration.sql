/*
  Warnings:

  - You are about to drop the column `shoppingCartId` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `Products_shoppingCartId_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `shoppingCartId`;

-- CreateTable
CREATE TABLE `_CartToProducts` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CartToProducts_AB_unique`(`A`, `B`),
    INDEX `_CartToProducts_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CartToProducts` ADD CONSTRAINT `_CartToProducts_A_fkey` FOREIGN KEY (`A`) REFERENCES `Cart`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CartToProducts` ADD CONSTRAINT `_CartToProducts_B_fkey` FOREIGN KEY (`B`) REFERENCES `Products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
