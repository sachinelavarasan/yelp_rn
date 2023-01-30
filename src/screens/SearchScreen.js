import React, { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useResults from "../hooks/useResults";

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, errorMessage, result] = useResults();

  const filterByPrice = (price) => {
    return result.filter((item) => {
      return item.price === price;
    });
  };

  return (
    <>
      <SearchBar
        value={searchTerm}
        onSearchTerm={(text) => setSearchTerm(text)}
        onSearchSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultList
          title="Cost Effective"
          results={filterByPrice("$")}
          navigation={navigation}
        />
        <ResultList
          title="Bit pricier"
          results={filterByPrice("$$")}
          navigation={navigation}
        />
        <ResultList
          title="Big Spender"
          results={filterByPrice("$$$")}
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
