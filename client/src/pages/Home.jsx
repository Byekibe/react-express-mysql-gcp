import { Link } from "react-router-dom";

const Home = () => {
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, id.",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci atque cumque dolor eveniet quidem architecto nesciunt repellat et, earum laborum dolorum delectus amet.",
            img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-1.jpg"
        },
        {
            id: 2,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, numquam!",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero accusamus velit hic, repudiandae, et ea asperiores tenetur quaerat numquam aliquid illum perspiciatis atque laboriosam eos? Ipsam et officia fuga laborum?",
            img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-2.jpg"
        },
        {
            id: 3,
            title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, laudantium.",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam facilis error quibusdam ipsam, cupiditate est quisquam dolores expedita consectetur natus sed, corrupti ex officiis cum.",
            img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-3.jpg"
        },
        {
            id: 4,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, enim?",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum animi totam autem id ducimus aperiam adipisci corporis debitis illum.",
            img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-6lslsls.jpg"
        },
        {
            id: 5,
            title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, possimus.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium expedita delectus officiis sint ratione quas eveniet nostrum temporibus et odio.",
            img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-5.jpg"
        }
    ]
    return (
        <div className="home">
            <div className="posts">
                {
                    posts.map(post => (
                        <div className="post" key={post.id}>
                            <div className="img">
                                <img src={post.img} alt="" />
                            </div>
                            <div className="content">
                                <Link className="link" to={`/post/${post.id}`}>
                                    <h1>{post.title}</h1>
                                </Link>
                                <p>{post.desc}</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;