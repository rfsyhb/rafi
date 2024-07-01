import React from 'react';

function HomePage() {
  return (
    <div className="container mx-auto py-2 gap-2 flex flex-col">
      <section className="my-8 flex flex-col md:flex-row gap-10">
        <div className="bg-cover bg-center text-bekgron flex items-center justify-center w-full md:w-[45%]">
          <h2 className="text-3xl font-bold bg-none py-5 px-10 rounded-3xl outline outline-3 hover:bg-bekgron hover:text-text hover:outline-text">
            Welcome to ABC Food - Your Culinary Delight
          </h2>
        </div>
        <div className="w-full md:w-[55%]">
          <h3 className="text-2xl font-bold mb-4">Our Summary</h3>
          <p>
            ABC Food is a culinary startup that specializes in providing
            delicious and healthy meals. We believe in quality and customer
            satisfaction. Our team of chefs are dedicated to bringing you the
            best culinary experience. Whether you are looking for a quick bite
            or a gourmet meal, ABC Food has something for everyone.
          </p>
          <br />
          <p>
            Our journey began with a passion for food and a desire to share that
            passion with the world. We started ABC Food to create a place where
            people can enjoy exceptional meals made from the finest ingredients.
            Our chefs are constantly experimenting with new recipes and
            techniques to keep our menu exciting and diverse. We believe that
            food is not just about nourishment but also about pleasure and
            community. At ABC Food, we aim to create a dining experience that
            you will cherish and remember.
          </p>
        </div>
      </section>
      <section className="my-8 rounded-xl outline p-2 shadow-lg">
        <h3 className="text-2xl font-semibold p-2">Featured Menu</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <div className="bg-white p-4 rounded shadow hover:rounded-xl hover:-translate-y-1">
            <img
              src="https://wallpapers.com/images/hd/aesthetic-food-pictures-yw84jpuaeol0h8vh.jpg"
              alt="Menu Item 1"
              className="w-full h-52 object-cover rounded mb-4"
            />
            <h4 className="text-xl font-bold">Menu Item 1</h4>
            <p className="text-gray-700">
              A short description of the menu item.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow hover:rounded-xl hover:-translate-y-1">
            <img
              src="https://wallpapers.com/images/hd/aesthetic-food-pictures-907-x-900-fv9mjo37wrkjzjda.jpg"
              alt="Menu Item 2"
              className="w-full h-52 object-cover rounded mb-4"
            />
            <h4 className="text-xl font-bold">Menu Item 2</h4>
            <p className="text-gray-700">
              A short description of the menu item.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow hover:rounded-xl hover:-translate-y-1">
            <img
              src="https://i.pinimg.com/originals/fd/12/89/fd128941d5cbe3265e616aca54b78bfa.jpg"
              alt="Menu Item 3"
              className="w-full h-52 object-cover rounded mb-4"
            />
            <h4 className="text-xl font-bold">Menu Item 3</h4>
            <p className="text-gray-700">
              A short description of the menu item.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
