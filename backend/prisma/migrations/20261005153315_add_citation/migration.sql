-- AlterTable
ALTER TABLE "Margin" ADD COLUMN     "citationId" TEXT;

-- CreateTable
CREATE TABLE "Citation" (
    "id" TEXT NOT NULL,
    "blogBodyId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Citation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Margin" ADD CONSTRAINT "Margin_citationId_fkey" FOREIGN KEY ("citationId") REFERENCES "Citation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Citation" ADD CONSTRAINT "Citation_blogBodyId_fkey" FOREIGN KEY ("blogBodyId") REFERENCES "BlogBody"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
