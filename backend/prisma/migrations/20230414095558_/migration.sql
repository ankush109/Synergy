-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "roomID" TEXT;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_roomID_fkey" FOREIGN KEY ("roomID") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;