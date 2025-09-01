/*
  Warnings:

  - You are about to drop the `InstallCommand` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bun` to the `Component` table without a default value. This is not possible if the table is not empty.
  - Added the required column `npm` to the `Component` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pnpm` to the `Component` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yarn` to the `Component` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Component` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."InstallCommand" DROP CONSTRAINT "InstallCommand_componentId_fkey";

-- AlterTable
ALTER TABLE "public"."Component" ADD COLUMN     "bun" TEXT NOT NULL,
ADD COLUMN     "npm" TEXT NOT NULL,
ADD COLUMN     "pnpm" TEXT NOT NULL,
ADD COLUMN     "yarn" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- DropTable
DROP TABLE "public"."InstallCommand";

-- CreateTable
CREATE TABLE "public"."ExampleComponent" (
    "id" SERIAL NOT NULL,
    "componentId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "npm" TEXT NOT NULL,
    "bun" TEXT NOT NULL,
    "pnpm" TEXT NOT NULL,
    "yarn" TEXT NOT NULL,
    "demoName" TEXT NOT NULL,

    CONSTRAINT "ExampleComponent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ExampleComponent" ADD CONSTRAINT "ExampleComponent_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "public"."Component"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
