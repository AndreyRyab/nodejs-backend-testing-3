import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const result = postsService.create(post);

    expect(result.text).toBe('Mocked post');
  });

  it('should find a post', () => {
    const newPost = postsService.create(post);

    const foundPosts = postsService.find(newPost.id);

    expect(foundPosts?.id).toBe(newPost.id);
  });
});
