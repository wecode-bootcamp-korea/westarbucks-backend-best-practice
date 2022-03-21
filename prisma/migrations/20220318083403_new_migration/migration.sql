/*
  Warnings:

  - You are about to alter the column `image_url` on the `product_images` table. The data in that column could be lost. The data in that column will be cast from `VarChar(3000)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `product_images` MODIFY `image_url` VARCHAR(191) NOT NULL;
