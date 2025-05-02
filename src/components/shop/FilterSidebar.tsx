import React from 'react';
import { X } from 'lucide-react';
import { FilterOptions, SneakerBrand, SneakerCategory } from '../../types';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  applyFilters: () => void;
  resetFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  isOpen, 
  onClose, 
  filters, 
  setFilters, 
  applyFilters,
  resetFilters
}) => {
  const categories: SneakerCategory[] = ['running', 'basketball', 'lifestyle', 'training', 'skateboarding'];
  const brands: SneakerBrand[] = ['Nike', 'Adidas', 'Jordan', 'New Balance', 'Puma', 'Reebok'];
  const colors = ['Black', 'White', 'Red', 'Blue', 'Gray', 'Green', 'Purple', 'Yellow', 'Orange', 'Pink'];
  const sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];
  
  return (
    <div 
      className={`fixed inset-y-0 left-0 z-40 w-full md:w-80 bg-dark-300 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } overflow-y-auto`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Filters</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-dark-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Categories */}
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-3">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox"
                  checked={filters.category === category}
                  onChange={() => setFilters({
                    ...filters, 
                    category: filters.category === category ? null : category
                  })}
                  className="w-4 h-4 accent-primary-500"
                />
                <span className="text-gray-300 capitalize">{category}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Brands */}
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-3">Brands</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox"
                  checked={filters.brand === brand}
                  onChange={() => setFilters({
                    ...filters, 
                    brand: filters.brand === brand ? null : brand
                  })}
                  className="w-4 h-4 accent-primary-500"
                />
                <span className="text-gray-300">{brand}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Price Range */}
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-3">Price Range</h4>
          <div className="flex space-x-4">
            <div>
              <label className="text-sm text-gray-400">Min</label>
              <input 
                type="number"
                min="0"
                value={filters.minPrice || ''}
                onChange={(e) => setFilters({
                  ...filters,
                  minPrice: e.target.value ? Number(e.target.value) : null
                })}
                className="w-full px-3 py-2 bg-dark-200 border border-gray-700 rounded focus:outline-none focus:border-primary-500"
                placeholder="$0"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Max</label>
              <input 
                type="number"
                min="0"
                value={filters.maxPrice || ''}
                onChange={(e) => setFilters({
                  ...filters,
                  maxPrice: e.target.value ? Number(e.target.value) : null
                })}
                className="w-full px-3 py-2 bg-dark-200 border border-gray-700 rounded focus:outline-none focus:border-primary-500"
                placeholder="$999"
              />
            </div>
          </div>
        </div>
        
        {/* Colors */}
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-3">Colors</h4>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setFilters({
                  ...filters,
                  color: filters.color === color ? null : color
                })}
                className={`w-8 h-8 rounded-full border ${
                  filters.color === color 
                    ? 'border-primary-500 ring-2 ring-primary-500/50' 
                    : 'border-gray-700'
                }`}
                style={{ background: getColorHex(color) }}
                title={color}
              />
            ))}
          </div>
        </div>
        
        {/* Sizes */}
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-3">Sizes</h4>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setFilters({
                  ...filters,
                  size: filters.size === size ? null : size
                })}
                className={`w-10 h-10 flex items-center justify-center rounded border ${
                  filters.size === size 
                    ? 'border-primary-500 bg-primary-500/10 text-primary-400' 
                    : 'border-gray-700 hover:border-gray-500 bg-dark-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4 border-t border-gray-800">
          <button 
            onClick={resetFilters}
            className="flex-1 btn btn-outline text-gray-300"
          >
            Reset
          </button>
          <button 
            onClick={() => {
              applyFilters();
              onClose();
            }}
            className="flex-1 btn btn-primary"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

const getColorHex = (colorName: string): string => {
  const colorMap: {[key: string]: string} = {
    'Black': '#000000',
    'White': '#ffffff',
    'Red': '#ff0000',
    'Blue': '#0000ff',
    'Gray': '#808080',
    'Green': '#008000',
    'Purple': '#800080',
    'Yellow': '#ffff00',
    'Orange': '#ffa500',
    'Pink': '#ffc0cb',
  };
  
  return colorMap[colorName] || '#888888';
};

export default FilterSidebar;