-- CreateTable
CREATE TABLE "public"."CreditComponent" (
    "id" SERIAL NOT NULL,
    "href" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "componentId" INTEGER NOT NULL,

    CONSTRAINT "CreditComponent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."CreditComponent" ADD CONSTRAINT "CreditComponent_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "public"."Component"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
