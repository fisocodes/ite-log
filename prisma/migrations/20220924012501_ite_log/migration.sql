-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT DEFAULT ' ',
    "lastname" TEXT DEFAULT ' ',
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "isNew" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "image", "isNew", "lastname", "name") SELECT "email", "emailVerified", "id", "image", "isNew", "lastname", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
