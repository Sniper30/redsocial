import getCurrentUser from "@/app/lib/getCurrentUser";
import prisma from "@/app/lib/prismaClient";
import { NextRequest } from "next/server";
export async function POST(req: NextRequest) {
  let user = await getCurrentUser();
  let post_like = (await req.json()) as any as { id: string; like: string };

  let findLike = await prisma.points.findMany({
    where: { post: { id: post_like.id } },
  });
  let up = findLike[0].up.filter((u) => u !== user.userid);
  let down = findLike[0].down.filter((u) => u !== user.userid);
  console.log(post_like);
  await prisma.points.updateMany({
    where: { post: { id: post_like.id } },
    data: {
      up: {
        set: up,
      },
      down: {
        set: down,
      },
    },
  });
  await prisma.points.updateMany({
    where: { post: { id: post_like.id } },
    data: {
      [`${post_like.like}`]: { push: user.userid },
    },
  });

  return Response.json(post_like);
}
