import Banner from "@/partials/home/banner/Banner";
import Brand from "@/partials/home/brand/Brand";
import Category from "@/partials/home/category/Category";
import Contact from "@/partials/home/contact/Contact";
import File from "@/partials/home/file/File";
import News from "@/partials/home/news/News";
import Nft from "@/partials/home/nft/Nft";
import Statistic from "@/partials/home/statistic/Statistic";

function Index() {
	return (
		<div className="home-page">
			<Banner />
			<Statistic />
			<Nft />
			<File />
			<Category />
			<Brand />
			<News />
			<Contact />
		</div>
	);
}

export default Index;
