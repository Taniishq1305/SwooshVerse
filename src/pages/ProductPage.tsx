import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { allSneakers } from '../data/sneakers';
import ProductInfo from '../components/product/ProductInfo';
import ProductViewer from '../components/product/ProductViewer';
import ProductGallery from '../components/product/ProductGallery';
import { Sneaker } from '../types';

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Sneaker | undefined>();
  const [showViewer, setShowViewer] = useState(true);
  const [viewerKey, setViewerKey] = useState(0);
  
  // Separate useEffect for scroll behavior
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Find the product
    const foundProduct = allSneakers.find(s => s.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  // Handle view switching
  const handleViewSwitch = () => {
    if (showViewer) {
      // When switching to photos, just hide the viewer
      setShowViewer(false);
    } else {
      // When switching back to 3D, increment key and show viewer
      setViewerKey(prev => prev + 1);
      setShowViewer(true);
    }
  };
  
  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-400 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/shop" className="btn btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }
  
  // Determine which 3D model to use based on product ID
  const getModelPath = () => {
    return '/3d_model/sneaker.glb';
  };
  
  return (
    <main className="pt-20 pb-16 bg-dark-400">
      {/* Breadcrumb */}
      <div className="container-custom mx-auto py-2">
        <Link to="/shop" className="flex items-center text-gray-400 hover:text-primary-400 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Shop
        </Link>
      </div>
      
      {/* Product Details */}
      <section className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Gallery/3D Viewer */}
          <div className="w-full h-[500px] bg-dark-300 rounded-lg overflow-hidden">
            {showViewer ? (
              <div key={`viewer-${viewerKey}`} className="w-full h-full">
                <ProductViewer 
                  modelPath={getModelPath()} 
                  productId={product.id}
                />
              </div>
            ) : (
              <ProductGallery 
                images={product.images} 
                productName={product.name}
              />
            )}
          </div>
          
          {/* Right Column - Product Info */}
          <div>
            {/* View Mode Toggle */}
            <div className="mb-4">
              <button
                onClick={handleViewSwitch}
                className="btn btn-outline"
              >
                {showViewer ? 'View Photos' : 'View in 3D'}
              </button>
            </div>
            
            <ProductInfo 
              product={{
                id: product.id,
                name: product.name,
                brand: product.brand,
                price: product.price,
                sizes: product.sizes.map(size => size.toString()),
                images: product.images,
                thumbnailImage: product.thumbnailImage,
                description: product.description,
                features: product.features
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;