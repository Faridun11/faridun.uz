import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, url, image }) => {
    const defaultImage = "https://i.postimg.cc/4N79kkCj/F.png";

    return (
        <Helmet>
            {/* Title & Description */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
