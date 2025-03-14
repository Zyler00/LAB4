/*
  Warnings:

  - Made the column `borrowDate` on table `History` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `History` MODIFY `borrowDate` DATETIME(3) NOT NULL;
