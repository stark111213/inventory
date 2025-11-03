-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Equipment', 'Books', 'Other');

-- CreateEnum
CREATE TYPE "StringFieldType" AS ENUM ('SINGLE_LINE', 'MULTI_LINE', 'LINK');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "inventory_id" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL,
    "custom_id" TEXT,
    "creator_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "image_url" TEXT,
    "tags" TEXT[],
    "is_public" BOOLEAN NOT NULL,
    "version" INTEGER NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StringField" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" "StringFieldType" NOT NULL,
    "field_meta_id" TEXT NOT NULL,
    "inventory_id" TEXT,

    CONSTRAINT "StringField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NumericField" (
    "id" TEXT NOT NULL,
    "content" DOUBLE PRECISION NOT NULL,
    "field_meta_id" TEXT NOT NULL,
    "inventory_id" TEXT,

    CONSTRAINT "NumericField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BooleanField" (
    "id" TEXT NOT NULL,
    "content" BOOLEAN NOT NULL,
    "field_meta_id" TEXT NOT NULL,
    "inventory_id" TEXT,

    CONSTRAINT "BooleanField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FieldMeta" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL,

    CONSTRAINT "FieldMeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "custom_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "inventory_id" TEXT,
    "userId" TEXT,
    "version" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "creator_id" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_custom_id_key" ON "Inventory"("custom_id");

-- CreateIndex
CREATE UNIQUE INDEX "StringField_field_meta_id_key" ON "StringField"("field_meta_id");

-- CreateIndex
CREATE UNIQUE INDEX "NumericField_field_meta_id_key" ON "NumericField"("field_meta_id");

-- CreateIndex
CREATE UNIQUE INDEX "BooleanField_field_meta_id_key" ON "BooleanField"("field_meta_id");

-- CreateIndex
CREATE UNIQUE INDEX "Item_inventory_id_custom_id_key" ON "Item"("inventory_id", "custom_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "Inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StringField" ADD CONSTRAINT "StringField_field_meta_id_fkey" FOREIGN KEY ("field_meta_id") REFERENCES "FieldMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StringField" ADD CONSTRAINT "StringField_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "Inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NumericField" ADD CONSTRAINT "NumericField_field_meta_id_fkey" FOREIGN KEY ("field_meta_id") REFERENCES "FieldMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NumericField" ADD CONSTRAINT "NumericField_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "Inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BooleanField" ADD CONSTRAINT "BooleanField_field_meta_id_fkey" FOREIGN KEY ("field_meta_id") REFERENCES "FieldMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BooleanField" ADD CONSTRAINT "BooleanField_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "Inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "Inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
