import getCurrentUser from "@/app/lib/getCurrentUser";
import prisma from "@/app/lib/prismaClient";
import UserPictureBall from '../user-ball-picture';

export default async function SubsData() {
  let currentUser = (await getCurrentUser()) as any;
  let subs = await prisma.user.findFirst({
    where: { id: currentUser.userid },
    include: {
      subscription: true,
    },
  });
  let subscriptions = subs?.subscription.subscriptions;
  let users = await prisma.user.findMany({
    where: {
      id: {
        in: subscriptions,
      },
    },
  });
  return (
    users &&
    users.length > 0 &&
    users.map((user) => (
      <li key={user.id} className='flex items-center gap-5 mb-3'>
        <UserPictureBall
          width={33}
          height={33}
          src={
            user.profilePhoto
              ? "" + user.profilePhoto
              : "/static/ben-sweet-2LowviVHZ-E-unsplash.jpg"
          }
          alt=''
        />
        {user.name}
      </li>
    ))
  );
}
