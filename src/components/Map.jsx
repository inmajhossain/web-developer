export default function Map() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gpp-[50px]">
        <div>
          <h2 className="mb-[50px] text-[30px] font-bold text-white">
            Find my Location
          </h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7300.286577288271!2d90.35030189768018!3d23.813503229962123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1b5cae23c6f%3A0x2c075d66a1a18975!2sSHANAJ%20FURNITURE!5e0!3m2!1sen!2sbd!4v1733582422225!5m2!1sen!2sbd"
          className="w-[1400px] mx-auto h-[600px] border-[1px] border-amber-100 p-2 rounded-md mb-[50px]"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
