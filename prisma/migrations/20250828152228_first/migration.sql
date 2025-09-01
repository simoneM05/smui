-- CreateTable
CREATE TABLE "public"."Component" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "code" TEXT NOT NULL,
    "demoName" TEXT NOT NULL,

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InstallCommand" (
    "id" SERIAL NOT NULL,
    "platform" TEXT NOT NULL,
    "command" TEXT NOT NULL,
    "componentId" INTEGER NOT NULL,

    CONSTRAINT "InstallCommand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."InstallCommand" ADD CONSTRAINT "InstallCommand_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "public"."Component"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
