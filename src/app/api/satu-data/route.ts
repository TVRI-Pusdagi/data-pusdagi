import { NextRequest, NextResponse } from "next/server";
import { client } from "../../libs/mongodb";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const db = client.db("satuData");
        const statistik = await db
            .collection("statistik")
            .find({})
            .toArray();
        return NextResponse.json(statistik, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: "Gagal mengambil data, cek koneksi MongoDB Anda kembali" }, { status: 400 });
    }
}