import { groq } from "next-sanity";
import { previewData } from "next/headers";
import PreviewBlogList from "../../../components/PreviewBlogList";
import urlFor from "../../../lib/urlFor";
import { client } from "../../../lib/sanity.client";
import PreviewSuspense from "../../../components/PreviewSuspense";
import Link from "next/link";

const query = groq`
    *[_type=='post'] {
        ...,
        author->,
        categories[]->
    } | order(_createAt desc)
`;

export const revalidate = 60;

async function Blog() {
    if (previewData()) {
        return (
            <PreviewSuspense
                fallback={
                    <div role="status">
                        <p className="text-center text-lg animate-pulse text-[#F7AB0A]"> Loading Preview Data...</p>
                    </div>
                }
            >
                <PreviewBlogList query={query} />
            </PreviewSuspense>
        );
    }

    const posts: Post[] = await client.fetch(query);
    return (
        <article className="blog active" data-page="blog">
            <header>
                <h2 className="h2 article-title">Blog</h2>
            </header>

            <section className="blog-posts">
                <ul className="blog-posts-list">
                    {posts.map((post) => (
                        <li key={post._id} className="blog-post-item">
                            <Link href={`/post/${post.slug.current}`}>
                                <figure className="blog-banner-box">
                                    <img src={urlFor(post.mainImage).url()} alt={post.title} loading="lazy" />
                                </figure>

                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <p className="blog-category">
                                            {post.categories.map((category) => (
                                                <span key={category._id}>{category.title}</span>
                                            ))}
                                        </p>

                                        <span className="dot"></span>

                                        <time>
                                            {new Date(post._createdAt).toLocaleDateString("en-US", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </time>
                                    </div>

                                    <h3 className="h3 blog-item-title">{post.title}</h3>

                                    <p className="blog-text">{post.description}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                    <li className="blog-post-item">
                        <a href="#">
                            <figure className="blog-banner-box">
                                <img src="./assets/images/blog-1.jpg" alt="Design conferences in 2022" loading="lazy" />
                            </figure>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p className="blog-category">Design</p>

                                    <span className="dot"></span>

                                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                                </div>

                                <h3 className="h3 blog-item-title">Design conferences in 2022</h3>

                                <p className="blog-text">
                                    Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="blog-post-item">
                        <a href="#">
                            <figure className="blog-banner-box">
                                <img src="./assets/images/blog-2.jpg" alt="Best fonts every designer" loading="lazy" />
                            </figure>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p className="blog-category">Design</p>

                                    <span className="dot"></span>

                                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                                </div>

                                <h3 className="h3 blog-item-title">Best fonts every designer</h3>

                                <p className="blog-text">
                                    Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="blog-post-item">
                        <a href="#">
                            <figure className="blog-banner-box">
                                <img src="./assets/images/blog-3.jpg" alt="Design digest #80" loading="lazy" />
                            </figure>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p className="blog-category">Design</p>

                                    <span className="dot"></span>

                                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                                </div>

                                <h3 className="h3 blog-item-title">Design digest #80</h3>

                                <p className="blog-text">
                                    Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam
                                    corporis suscipit.
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="blog-post-item">
                        <a href="#">
                            <figure className="blog-banner-box">
                                <img
                                    src="./assets/images/blog-4.jpg"
                                    alt="UI interactions of the week"
                                    loading="lazy"
                                />
                            </figure>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p className="blog-category">Design</p>

                                    <span className="dot"></span>

                                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                                </div>

                                <h3 className="h3 blog-item-title">UI interactions of the week</h3>

                                <p className="blog-text">
                                    Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco
                                    laboris nisi.
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="blog-post-item">
                        <a href="#">
                            <figure className="blog-banner-box">
                                <img
                                    src="./assets/images/blog-5.jpg"
                                    alt="The forgotten art of spacing"
                                    loading="lazy"
                                />
                            </figure>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p className="blog-category">Design</p>

                                    <span className="dot"></span>

                                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                                </div>

                                <h3 className="h3 blog-item-title">The forgotten art of spacing</h3>

                                <p className="blog-text">
                                    Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="blog-post-item">
                        <a href="#">
                            <figure className="blog-banner-box">
                                <img src="./assets/images/blog-6.jpg" alt="Design digest #79" loading="lazy" />
                            </figure>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p className="blog-category">Design</p>

                                    <span className="dot"></span>

                                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                                </div>

                                <h3 className="h3 blog-item-title">Design digest #79</h3>

                                <p className="blog-text">
                                    Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    );
}

export default Blog;
