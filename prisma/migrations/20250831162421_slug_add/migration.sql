/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Component` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Component_name_key";

-- AlterTable
ALTER TABLE "public"."Component" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Component_slug_key" ON "public"."Component"("slug");
