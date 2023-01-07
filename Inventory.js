package com.testing;
public class Inventory {
    private Item[] items;
    private int size;
    private int numItems;
    public void addItem(String name) {
        if (numItems < size) {
            Item item = new Item(name);
            items[numItems] = item;
            numItems++;
        } else {
            System.out.println("Inventory is full!");
        }
    }
    public int getNumItems() {
        return numItems;
    }
    public Item getItem(int index) {
        return items[index];
    }
    public int getSize() {
        return size;
    }
    public Inventory(int size) {
        this.size = size;
        this.items = new Item[size];
        this.numItems = 0;
    }
    public void addItem(Item item) {
        if (numItems < size) {
            items[numItems] = item;
            numItems++;
        } else {
            System.out.println("Inventory is full!");
        }
    }
    public void removeItem(Item item) {
        int index = -1;
        for (int i = 0; i < numItems; i++) {
            if (items[i] == item) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            for (int i = index; i < numItems - 1; i++) {
                items[i] = items[i + 1];
            }
            numItems--;
        } else {
            System.out.println("Item not found in inventory!");
        }
    } 
    public void displayItems() {
        for (int i = 0; i < numItems; i++) {
            System.out.println(items[i]);
        }
    }
}
