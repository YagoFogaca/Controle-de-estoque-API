-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supply" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unity" TEXT NOT NULL,
    "quantity_stock" DOUBLE PRECISION NOT NULL,
    "output_quantity" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "supply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supply_entry" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "supplyId" TEXT NOT NULL,
    "name_supply" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "unity" TEXT NOT NULL,
    "entry_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "supply_entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supply_output" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "supplyId" TEXT NOT NULL,
    "name_supply" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "unity" TEXT NOT NULL,
    "requester" TEXT NOT NULL,
    "output_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "supply_output_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_id_key" ON "profile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "supply_id_key" ON "supply"("id");

-- CreateIndex
CREATE UNIQUE INDEX "supply_entry_id_key" ON "supply_entry"("id");

-- CreateIndex
CREATE UNIQUE INDEX "supply_output_id_key" ON "supply_output"("id");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supply_entry" ADD CONSTRAINT "supply_entry_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supply_entry" ADD CONSTRAINT "supply_entry_supplyId_fkey" FOREIGN KEY ("supplyId") REFERENCES "supply"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supply_output" ADD CONSTRAINT "supply_output_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supply_output" ADD CONSTRAINT "supply_output_supplyId_fkey" FOREIGN KEY ("supplyId") REFERENCES "supply"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
