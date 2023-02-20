/*
  Warnings:

  - You are about to drop the `userregister` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `userregister`;

-- CreateTable
CREATE TABLE `ShoppingCart` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProductsToShoppingCart` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ProductsToShoppingCart_AB_unique`(`A`, `B`),
    INDEX `_ProductsToShoppingCart_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ProductsToShoppingCart` ADD CONSTRAINT `_ProductsToShoppingCart_A_fkey` FOREIGN KEY (`A`) REFERENCES `Products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductsToShoppingCart` ADD CONSTRAINT `_ProductsToShoppingCart_B_fkey` FOREIGN KEY (`B`) REFERENCES `ShoppingCart`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
