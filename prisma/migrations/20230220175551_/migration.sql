/*
  Warnings:

  - You are about to drop the `shoppingcart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `Products_shoppingCartId_fkey`;

-- DropTable
DROP TABLE `shoppingcart`;

-- CreateTable
CREATE TABLE `Cart` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_shoppingCartId_fkey` FOREIGN KEY (`shoppingCartId`) REFERENCES `Cart`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
