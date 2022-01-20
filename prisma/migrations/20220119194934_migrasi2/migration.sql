-- CreateTable
CREATE TABLE "Produk" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "photos" TEXT,
    "harga" INTEGER NOT NULL,
    "description" TEXT,

    CONSTRAINT "Produk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kategori" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Kategori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pesanan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telepon" INTEGER NOT NULL,

    CONSTRAINT "Pesanan_pkey" PRIMARY KEY ("id")
);
