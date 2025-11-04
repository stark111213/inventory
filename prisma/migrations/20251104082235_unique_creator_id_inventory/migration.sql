/*
  Warnings:

  - A unique constraint covering the columns `[id,creator_id]` on the table `Inventory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Inventory_id_creator_id_key" ON "Inventory"("id", "creator_id");
