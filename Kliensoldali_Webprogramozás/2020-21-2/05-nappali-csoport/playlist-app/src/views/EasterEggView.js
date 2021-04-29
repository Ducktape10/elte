import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Loader, Dimmer } from 'semantic-ui-react';
import { setCat } from "../redux/actions/catAction";

const EasterEggView = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {

    (async () => {
      setLoading(true);
      const json = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng', {
        headers: {
          'x-api-key': '850b55b1-5e91-4144-8154-6111ff1afb95'
        }
      });
      setLoading(false);

      const result = await json.json();

      dispatch(setCat({
        catFriendly: result[0].breeds[0].cat_friendly,
        childFriendly: result[0].breeds[0].child_friendly,
        id: result[0].id,
        url: result[0].url,
      }));


      setUrl(result[0].url);
    })();

  }, [dispatch]);

  return (
    <div>
      {isLoading ?
        (<Dimmer active={isLoading}>
          <Loader active={isLoading} />
        </Dimmer>) :
        (<img src={url} alt='Macsek' />)
    }
    </div>
  );
};

export default EasterEggView;