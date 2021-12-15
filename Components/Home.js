import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown';
import Description from './Description';

const Home = () => {
  const [job, setJob] = useState([]);
  const [error, setError] = useState('');
  const [country, setCountry] = useState('gb');
  const [page, setPage] = useState('1');
  const [jobCategory, setJobCategory] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const countryCode = [
    'gb',
    'at',
    'au',
    'br',
    'ce',
    'de',
    'fr',
    'in',
    'it',
    'nl',
    'nz',
    'pl',
    'ru',
    'sg',
    'us',
    'za',
  ];

  const apiURL = 'https://api.adzuna.com/v1/api';
  const appID = 'app_id=127cdaaa';
  const appKey = 'app_key=5cd9609f7c9c18c7e5a1e47a6a735ac5';

  const getJobData = async () => {
    const resp = await axios.get(
      `${apiURL}/jobs/${country}/search/${page}?${appID}&${appKey}`,
      // 'https://api.adzuna.com/v1/api/jobs/in/search/5?app_id=127cdaaa&app_key=5cd9609f7c9c18c7e5a1e47a6a735ac5',
    );
    return resp.data.results;
  };

  const getJobCategory = async () => {
    const resp = await axios.get(
      'https://api.adzuna.com/v1/api/jobs/gb/categories?app_id=127cdaaa&app_key=5cd9609f7c9c18c7e5a1e47a6a735ac5',
    );
    return resp.data.results;
  };

  useEffect(() => {
    getJobData()
      .then(res => {
        setJob(res);
        // console.log(res);
        setLoaded(true);
      })
      .catch(err => console.log(err));

    getJobCategory()
      .then(res => setJobCategory(res))
      .catch(err => console.log(err));
  }, [country, page]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={{flex: 1, marginHorizontal: 10}}>
        <View style={styles.container}>
          <SelectDropdown
            data={countryCode}
            onSelect={(item, key) => {
              setCountry(item);
            }}
            defaultButtonText="Country Code"
          />

          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              width: 350,
              borderColor: '#009387',
              marginVertical: 10,
              borderRadius: 10,
            }}
            placeholder="page"
            onChangeText={text => setPage(text)}
            value={page}
          />



          {job ? (
            job.map((item, key) => {
              return (
                <View style={styles.description} key={item.id}>
                  <Description
                    title={item.title}
                    description={item.description}
                    location={item.location.display_name}
                    company={item.company.display_name}
                    date={item.created}
                    apply={item.redirect_url}
                  />
                </View>
              );
            })
          ) : (
            <Text>No jobs are fetched.</Text>
          )}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    border: '1px',
    borderColor: '#d8d8d8',
  },
  description: {
    marginVertical: 10,
    flex: 1,
  },
});

export default Home;
