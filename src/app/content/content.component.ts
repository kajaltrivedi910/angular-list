import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  isDrawerOpen = false;
  products = [
    {
      "pk": 101,
      "name": "Wireless Headphones",
      "points": 250,
      "display_img_url": "assets/headphone.png",
      "quantity": 0,
      "valid_until": "2025-06-30T00:00:00",
      "low_quantity": 5
    },
    {
      "pk": 102,
      "name": "Smartwatch",
      "points": 350,
      "display_img_url": "assets/smartwatch.png",
      "quantity": 3,
      "valid_until": "2025-12-31T00:00:00",
      "low_quantity": 8
    },
    {
      "pk": 103,
      "name": "Bluetooth Speaker",
      "points": 200,
      "display_img_url": "assets/speaker.png",
      "quantity": 50,
      "valid_until": "2024-11-15T00:00:00",
      "low_quantity": 10
    },
    {
      "pk": 104,
      "name": "Gaming Mouse",
      "points": 180,
      "display_img_url": "assets/mouse.png",
      "quantity": 25,
      "valid_until": "2025-03-31T00:00:00",
      "low_quantity": 5
    },
    {
      "pk": 105,
      "name": "Backpack",
      "points": 120,
      "display_img_url": "assets/backpacke.png",
      "quantity": 40,
      "valid_until": "2024-09-30T00:00:00",
      "low_quantity": 7
    },
    {
      "pk": 106,
      "name": "Fitness Band",
      "points": 300,
      "display_img_url": "assets/fitnessband.png",
      "quantity": 15,
      "valid_until": "2025-08-15T00:00:00",
      "low_quantity": 4
    },
    {
      "pk": 107,
      "name": "E-Gift Card",
      "points": 100,
      "display_img_url": "assets/e-giftcard.png",
      "quantity": 100,
      "valid_until": "2025-01-31T00:00:00",
      "low_quantity": 20
    },
    {
      "pk": 108,
      "name": "Laptop Stand",
      "points": 220,
      "display_img_url": "assets/placeholder.png",
      "quantity": 35,
      "valid_until": "2024-12-31T00:00:00",
      "low_quantity": 5
    },
    {
      "pk": 109,
      "name": "Power Bank",
      "points": 150,
      "display_img_url": "assets/placeholder.png",
      "quantity": 60,
      "valid_until": "2025-04-30T00:00:00",
      "low_quantity": 10
    },
    {
      "pk": 110,
      "name": "Travel Mug",
      "points": 90,
      "display_img_url": "assets/placeholder.png",
      "quantity": 45,
      "valid_until": "2024-10-15T00:00:00",
      "low_quantity": 6
    }
  ]
  categories = [
    { name: 'e-Voucher', selected: true },
    { name: 'Products', selected: false },
    { name: 'Evergreen', selected: false },
    { name: 'Fashion & Retail', selected: false },
  ];
  filteredProducts = [...this.products]; // Copy of products for filtering

  // Selected sort option
  selectedSortOrder: string | null = null;

   // Pagination variables
   itemsPerPage = 6;
   perPageOptions = [6, 9, 12, 15];
 
   ngOnInit() {
     this.updatePagination();
   }
 
   updatePagination() {
     this.filteredProducts = this.products.slice(0, this.itemsPerPage);
   }

  selectCategory(category: any) {
    this.categories.forEach((cat) => (cat.selected = false));
    category.selected = true;
  }

  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  setSortOrder(order: string): void {
    this.selectedSortOrder = order;
  }

  applyFilters(): void {
    let results = [...this.products];
    console.log('selectedSortOrder', this.selectedSortOrder)
    // Apply sorting
    if (this.selectedSortOrder === 'asc') {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.selectedSortOrder === 'desc') {
      results.sort((a, b) => b.name.localeCompare(a.name));
    }

    this.filteredProducts = results;
    this.toggleDrawer(); // Close the drawer after applying filters
  }

  resetFilters(): void {
    this.filteredProducts = [...this.products];
    this.selectedSortOrder = null;
    this.toggleDrawer(); // Close the drawer after resetting
  }
}
