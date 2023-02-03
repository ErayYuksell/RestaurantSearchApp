import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, errorMessage, results] = useResult();

  const filterResultsByPrice = (price) => {
    // price= '$' || '$$' || '$$$'
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results </Text>
      <ResultList
        results={filterResultsByPrice("$")}
        title="Cost Effective"
      ></ResultList>
      <ResultList
        results={filterResultsByPrice("$$")}
        title="Big Pricier"
      ></ResultList>
      <ResultList
        results={filterResultsByPrice("$$$")}
        title="Big Spender"
      ></ResultList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
