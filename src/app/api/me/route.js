import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "์Nattida Phaiboontanasan",
    studentId: "650610759",
  });
};
