import React, { useState } from "react";
import { View, ScrollView, FlatList } from "react-native";
import { pets } from "../components/data/pets";
import { PetCard } from "../components/petCard";

import Header from "../components/Header";
import FilterButton from "../components/FilterButton";

export default function Home() {
  const [filter, setFilter] = useState<string>("All");
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const filteredPets =
    filter === "All"
      ? pets
      : pets.filter((pet) => pet.type === filter);

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#f1f5f9" }}>
      
      {/* largura simulando celular */}
      <View style={{ width: "100%", maxWidth: 420 }}>

        <Header />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 12, marginTop: 10 }}
        >
          <FilterButton title="Cobra" onPress={() => setFilter("Cobra")} />
          <FilterButton title="Gato" onPress={() => setFilter("Cat")} />
          <FilterButton title="Cachorro" onPress={() => setFilter("Dog")} />
          <FilterButton title="Papagaio" onPress={() => setFilter("Papagaio")} />
        </ScrollView>

        <FlatList
          data={filteredPets}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 8 }}
          renderItem={({ item }) => (
            <PetCard
              type={item.type}
              name={item.name}
              breed={item.breed}
              age={item.age}
              image={item.image}
              onFavoritePress={() => toggleFavorite(item.id)}
            />
          )}
        />

      </View>

    </View>
  );
}