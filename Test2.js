package com.testing;
import java.util.*;
	public class Test2 {
	    public static void main(String[] args) {
	        Inventory inventory = new Inventory(10);
	        inventory.addItem(new Item("sword"));
	        inventory.addItem(new Item("bow"));
	        inventory.addItem(new Item("shield"));
	        Scanner scanner = new Scanner(System.in);
	        while (true) {
	            System.out.println(" Enter your poison \n 1) add an item (Start Creating dark magic) \n 2) search for an item (Inside of your backpack) \n 3) exit (Go home) \n");
	            int choice = scanner.nextInt();
	            if (choice == 1) {
	                System.out.println("Enter the name of the item:");
	                String name = scanner.next();
	                inventory.addItem(name);
	                System.out.println("\n" + name + " Item added to inventory \n");
	            } else if (choice == 2) {
	            	inventory.displayItems();
	                System.out.println("Enter the name of the item:");
	                String name = scanner.next();
	                boolean lookfor = false;
	                for (int i = 0; i < inventory.getNumItems(); i++) {
	                    if (inventory.getItem(i).getName().equals(name)) {
	                        System.out.println(" ");
	                        System.out.println("You equipt "+inventory.getItem(i));
	                    	System.out.println(" ");
	                    	lookfor = true;
	                        break;
	                    }
	                }
	                if (!lookfor) {
	                	System.out.println(" ");
	                    System.out.println(name +" Item unavailable");
	                    System.out.println(" ");
	                }
	            } else if (choice == 3) {
	            	System.out.println("Thanks for using");
	                break;
	            } else {
	                System.out.println("Invalid choice. Enter 1, 2, or 3.");
	            }
	        }
	        scanner.close();
	    }
	}
