import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDb = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });

  return result;
};

const getAllPost = async (options: any): Promise<any> => {
  const { page, limit } = options;

  const skip = parseInt(page) * parseInt(limit) - parseInt(limit) || 0;
  const take = parseInt(limit) || 10;

  return await prisma.$transaction(async (tx) => {
    const result = await tx.post.findMany({
      skip,
      take,
      include: {
        author: true,
        category: true,
      },
    });

    const total = await tx.post.count();

    return { data: result, total };
  });
};

const getSinglePost = async (id: number): Promise<Post | null> => {
  const result = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  return result;
};

const updatePostById = async (id: number, data: Partial<Post>): Promise<Post> => {
  const result = await prisma.post.update({
    where: {
      id: id,
    },
    data,
  });

  return result;
};
const deletePostById = async (id: number): Promise<Post> => {
  const result = await prisma.post.delete({
    where: {
      id: id,
    },
  });

  return result;
};
const learnAggregateAndGrouping = async () => {
  // const result = await prisma.post.aggregate({
  //   _avg: {
  //     authorId: true,
  //   },
  //   _count: {
  //     authorId: true,
  //   },
  //   _sum: {
  //     authorId: true,
  //   },
  // });

  const result = await prisma.post.groupBy({
    by: ["title"],
    _count: {
      title: true,
    },
  });
  return result;
};

export const PostService = {
  insertIntoDb,
  getAllPost,
  getSinglePost,
  updatePostById,
  deletePostById,
  learnAggregateAndGrouping,
};
