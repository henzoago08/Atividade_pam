import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface FilterButtonProps {
  title: string;
  onPress: () => void;
  active?: boolean;
}

export default function FilterButton({ title, onPress, active }: FilterButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, active && styles.activeButton]}
      onPress={onPress}
    >
      <Text style={[styles.text, active && styles.activeText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#e5e7eb",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
  },

  activeButton: {
    backgroundColor: "#22c55e",
  },

  text: {
    color: "#333",
    fontWeight: "600",
  },

  activeText: {
    color: "white",
  },
});