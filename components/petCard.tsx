import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export interface Pet {
  id: string;
  name: string;
  breed: string;
  type: string;
  age: string;
  image: string;
}

interface PetCardProps {
  type: string;
  name: string;
  breed: string;
  age: string;
  image: string;
  onFavoritePress: () => void;
}

export const PetCard = ({
  type,
  name,
  breed,
  age,
  image,
  onFavoritePress,
}: PetCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.breed}>{breed}</Text>
      <Text style={styles.age}>{age}</Text>

      <TouchableOpacity onPress={onFavoritePress} style={styles.favoriteButton}>
        <Text style={styles.heart}>❤️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 18,
    alignItems: "center",

    elevation: 4,
  },

  image: {
    width: 110,
    height: 110,
    borderRadius: 15,
    marginBottom: 8,
  },

  name: {
    fontWeight: "bold",
    fontSize: 16,
  },

  breed: {
    color: "#555",
    fontSize: 13,
  },

  age: {
    color: "#777",
    fontSize: 12,
  },

  favoriteButton: {
    marginTop: 8,
  },

  heart: {
    fontSize: 20,
  },
});