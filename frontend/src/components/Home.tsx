import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { FcStackOfPhotos } from "react-icons/fc";
import CreateClinic from "./createPost";
import { GetPostQuery, GetUserQuery } from "@/api/user";

import { MdPermMedia } from "react-icons/md";
import Carousel from "react-multi-carousel";
import PostItem from "./PostCard";
import Link from "next/link";
import SEO from "./SEO";

function Home() {
  const userQuery = GetUserQuery();
  const PostQuery = GetPostQuery();

  const [selectedTab, setSelectedTab] = React.useState("");

  useEffect(() => {
    const path = window.location.pathname;
    console.log(path);

    setSelectedTab(path);
  }, [selectedTab]);
  //  const responsive = {
  //    desktop: {
  //      breakpoint: { max: 3000, min: 1024 },
  //      items: 3,
  //    },
  //    tablet: {
  //      breakpoint: { max: 1023, min: 464 },
  //      items: 2,
  //    },
  //    mobile: {
  //      breakpoint: { max: 767, min: 0 },
  //      items: 1,
  //    },
  //  };
  return (
    <div className="bg-zinc-900 w-full overflow-y-scroll scrollbar-hide  ">
      <SEO title="SynHub" />
      <div className="  my-4">
        <div className="flex flex-col">
          {/* <div className="flex gap-4 justify-center">
            <div className="w-20 h-20 rounded-xl bg-neutral-50"></div>
            <div className="w-20 h-20 rounded-xl bg-neutral-50"></div>
            <div className="w-20 h-20 rounded-xl bg-neutral-50"></div>
            <div className="w-20 h-20 rounded-xl bg-neutral-50"></div>
            <div className="w-20 h-20 rounded-xl bg-neutral-50"></div>
          </div> */}

          <div className="inline-flex ml-8 mt-8">
            {/* <Carousel
              responsive={responsive}
              containerClass="-mx-[10px]"
              itemClass="px-[10px]"
            > */}
            <div className="flex-1  text-center px-2 py-2 m-1">
              <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white hover:border-blue-300 hover:shadow-lg rounded-full overflow-hidden border-4 ">
                <Link href="/Room1" onClick={() => setSelectedTab("Room1")}>
                  <img
                    className="object-cover w-full h-full"
                    src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
                  />
                </Link>
              </div>
              <h1 className="pt-12 text-base font-semibold  hover:text-blue-300 group cursor-pointer hover:shadow-lg">
                <Link href="/Room1" onClick={() => setSelectedTab("Room1")}>
                  Web Development
                </Link>
              </h1>
            </div>
            <div className="flex-1 text-center px-2 py-2 m-1">
              <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <img
                  className="object-cover w-full h-full"
                  src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
                />
              </div>
              <h1 className="pt-12 text-base font-semibold text-gray-100">
                App Development
              </h1>
            </div>
            <div className="flex-1 text-center px-2 py-2 m-1">
              <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <img
                  className="object-cover w-full h-full"
                  src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
                />
              </div>
              <h1 className="pt-12 text-base font-semibold text-gray-100">
                Artificical Intelligence
              </h1>
            </div>

            <div className="flex-1 text-center px-2 py-2 m-1">
              <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <img
                  className="object-cover w-full h-full"
                  src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
                />
              </div>
              <h1 className="pt-12 text-base font-semibold text-gray-100">
                competitive programming
              </h1>
            </div>
            <div className="flex-1 text-center px-2 py-2 m-1">
              <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <img
                  className="object-cover w-full h-full"
                  src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
                />
              </div>
              <h1 className="pt-12 text-base font-semibold text-gray-100">
                Machine Learning
              </h1>
            </div>
            {/* </Carousel> */}
          </div>

          {/* <div className="flex p-2 my-8  bg-zinc-700 rounded-xl flex-col mx-20">
            <div className="flex mx-3 items-center justify-evenly">
              <img
                className="w-20 h-20 rounded-full"
                src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/311569098_1471832893328696_953621629116532090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=I7TFkrXZc7wAX-vVMC7&_nc_ht=scontent.fccu3-1.fna&oh=00_AfBsVybr-5jRKc8UeqRmoXCunPcUfYHZn3xyr3k3vdRalg&oe=643D3069"
              />
              <p>Share your Doubts</p>
              <CreateClinic />
            </div>
          </div> */}
          {/* <div className="flex my-5 bg-zinc-700 rounded-xl h-1/2 flex-col mx-20"> */}
          {/* <div className="flex items-center"> */}

          {/* </div> */}
          {/* </div> */}
          {/* <div className="flex p-2 my-8  bg-zinc-700 rounded-xl flex-col mx-20">
            <div className="flex mx-3 items-center justify-evenly">
              <img
                className="w-20 h-20 rounded-full"
                src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/311569098_1471832893328696_953621629116532090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=I7TFkrXZc7wAX-vVMC7&_nc_ht=scontent.fccu3-1.fna&oh=00_AfBsVybr-5jRKc8UeqRmoXCunPcUfYHZn3xyr3k3vdRalg&oe=643D3069"
              />
              <p>Share your Doubts</p>
              <CreateClinic />
            </div>
          </div> */}
          {PostQuery.data?.map((post: any, index: any) => (
            <PostCard
              data={post}
              key={index}
              user={post.user}
              createdAt={post.createdAt}
              title={post.title}
              description={post.description}
              displayImages={post.displayImages}
              id={post.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
