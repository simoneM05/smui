/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `ExampleComponent` will be added. If there are existing duplicate values, this will fail.
  - Made the column `slug` on table `Component` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "public"."Category" AS ENUM ('STATIC', 'MOTION', 'KIT');

-- AlterTable
ALTER TABLE "public"."Component" ADD COLUMN     "category" "public"."Category" NOT NULL DEFAULT 'STATIC',
ALTER COLUMN "slug" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."ExampleComponent" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ExampleComponent_slug_key" ON "public"."ExampleComponent"("slug");
