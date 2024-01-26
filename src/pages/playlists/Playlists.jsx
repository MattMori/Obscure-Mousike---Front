import "./index.scss";

const Playlists = () => {
  return (
    <div className="Playlists">
      <h1>Playlists Por Gênero</h1>
      <div className="Playlists-quadrados">
        <div className="Playlists-quadrado">
          <iframe
            style={{ borderRadius: "30px" }}
            src="https://open.spotify.com/embed/playlist/1Uh33tCnfL4SgKf5UdnPj4?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="Playlists-quadrado">
        <iframe
          style={{ borderRadius: "30px" }}
          src="https://open.spotify.com/embed/playlist/7dNVIpUaTzULqpmcf9hckQ?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        </div>
        <div className="Playlists-quadrado">
        <iframe
          style={{ borderRadius: "30px" }}
          src="https://open.spotify.com/embed/playlist/3eSE9G0pCHiMj0b6QTsbj9?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        </div><div className="Playlists-quadrado">
        <iframe
          style={{ borderRadius: "30px" }}
          src="https://open.spotify.com/embed/playlist/33f9BIIEO00penY7uASXrp?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        </div><div className="Playlists-quadrado">
        <iframe
          style={{ borderRadius: "30px" }}
          src="https://open.spotify.com/embed/playlist/6oGk1AwMSlJDEQQy7nuxW8?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        </div><div className="Playlists-quadrado">
        <iframe
          style={{ borderRadius: "30px" }}
          src="https://open.spotify.com/embed/playlist/25zOylq7H86uvDf3ys9TaK?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Playlists;
