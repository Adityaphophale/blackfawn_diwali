import React, { useState } from 'react';

interface PackagingOption {
  id: string;
  letter: string;
  name: string;
  description: string;
  image: string;
}

interface KeepsakeOption {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
}

const PACKAGING_OPTIONS: PackagingOption[] = [
  {
    id: 'pkg-a',
    letter: 'A',
    name: 'Clear-lid ribbon box',
    description: 'Transparent top displaying festive presentation with elegant ribbon finish.',
    image: '/images/packaging_clear_lid.jpg'
  },
  {
    id: 'pkg-b',
    letter: 'B',
    name: 'Floral bow box',
    description: 'Delicate floral motif rigid box adorned with a festive satin bow.',
    image: '/images/packaging_floral_bow.jpg'
  },
  {
    id: 'pkg-c',
    letter: 'C',
    name: 'Festive window tray',
    description: 'Ornate printed window tray designed for open-view festive display.',
    image: '/images/packaging_festive_tray.jpg'
  }
];

const KEEPSAKE_OPTIONS: KeepsakeOption[] = [
  {
    id: 'ks-1',
    number: '1',
    name: 'Deity frame on stand, 4″',
    description: 'Silver-finish embossed deity frame with desk easel stand.',
    image: '/images/keepsake_deity_frame.jpg'
  },
  {
    id: 'ks-2',
    number: '2',
    name: 'Little monks set',
    description: 'Charming 4-piece monk figurines symbolising peace, mindfulness and joy.',
    image: '/images/keepsake_little_monks.jpg'
  },
  {
    id: 'ks-3',
    number: '3',
    name: 'Ganesh ji idol',
    description: 'Gold-finish Lord Ganesha idol on decorative pedestal.',
    image: '/images/keepsake_ganesh_ji.jpg'
  }
];

const INCLUSIONS = [
  'Box & festive décor',
  'Your chosen keepsake',
  'Customised greeting card',
  'Diya',
  'Potli of mixed dry-fruit chocolates',
  'Nirmal dhoop cones',
  'Potli of Das penda (2 pcs)'
];

interface SignatureBoxBuilderProps {
  onEnquire: (productCode: string, category: string) => void;
}

export const SignatureBoxBuilder: React.FC<SignatureBoxBuilderProps> = ({ onEnquire }) => {
  const [selectedPackaging, setSelectedPackaging] = useState<PackagingOption | null>(null);
  const [selectedKeepsake, setSelectedKeepsake] = useState<KeepsakeOption | null>(null);

  const handleReset = () => {
    setSelectedPackaging(null);
    setSelectedKeepsake(null);
  };

  const handleEnquire = () => {
    const pkgText = selectedPackaging 
      ? `${selectedPackaging.letter} (${selectedPackaging.name})` 
      : 'Any Packaging';
    const ksText = selectedKeepsake 
      ? `${selectedKeepsake.number} (${selectedKeepsake.name})` 
      : 'Any Keepsake';
    const fullSpec = `Custom Signature Box [Packaging: ${pkgText} | Keepsake: ${ksText}]`;
    onEnquire(fullSpec, 'Build Your Own Signature Box');
  };

  return (
    <section className="section signature-builder-section" id="signature-box" aria-labelledby="builder-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Interactive Preference Configurator</span>
          <h2 className="section-title" id="builder-heading">Your Signature Box. Your Personal Touch.</h2>
          <p className="section-desc">
            Create a festive gifting experience with packaging and keepsakes selected to suit your corporate gifting requirements.
          </p>
          <div className="gold-divider" aria-hidden="true"></div>
        </header>

        <div className="builder-layout">
          <div className="builder-steps-col">
            {/* Step 1 */}
            <div className="builder-step">
              <div className="builder-step-header">
                <span className="builder-step-num">Step 1</span>
                <h3 className="builder-step-title">Choose Packaging</h3>
              </div>
              <div className="builder-options-grid" role="radiogroup" aria-label="Step 1: Choose Packaging">
                {PACKAGING_OPTIONS.map(pkg => (
                  <div
                    key={pkg.id}
                    className={`builder-option-card ${selectedPackaging?.id === pkg.id ? 'is-selected' : ''}`}
                    onClick={() => setSelectedPackaging(pkg)}
                    tabIndex={0}
                    role="radio"
                    aria-checked={selectedPackaging?.id === pkg.id}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedPackaging(pkg);
                      }
                    }}
                  >
                    <span className="builder-check-icon" aria-hidden="true">✓</span>
                    <img src={pkg.image} alt={`${pkg.letter} — ${pkg.name}`} className="builder-option-img" loading="lazy" />
                    <div className="builder-option-info">
                      <span className="builder-option-name">{pkg.letter} · {pkg.name}</span>
                      <span className="builder-option-desc">{pkg.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="builder-step">
              <div className="builder-step-header">
                <span className="builder-step-num">Step 2</span>
                <h3 className="builder-step-title">Choose a Keepsake</h3>
              </div>
              <div className="builder-options-grid" role="radiogroup" aria-label="Step 2: Choose a Keepsake">
                {KEEPSAKE_OPTIONS.map(ks => (
                  <div
                    key={ks.id}
                    className={`builder-option-card ${selectedKeepsake?.id === ks.id ? 'is-selected' : ''}`}
                    onClick={() => setSelectedKeepsake(ks)}
                    tabIndex={0}
                    role="radio"
                    aria-checked={selectedKeepsake?.id === ks.id}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedKeepsake(ks);
                      }
                    }}
                  >
                    <span className="builder-check-icon" aria-hidden="true">✓</span>
                    <img src={ks.image} alt={`${ks.number} — ${ks.name}`} className="builder-option-img" loading="lazy" />
                    <div className="builder-option-info">
                      <span className="builder-option-name">{ks.number} · {ks.name}</span>
                      <span className="builder-option-desc">{ks.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary sidebar */}
          <aside className="builder-summary-card" aria-label="Your Signature Box Selection Summary">
            <div className="builder-summary-title">
              <span>Your Selection Summary</span>
              <button type="button" className="builder-summary-reset" onClick={handleReset}>Reset</button>
            </div>

            <div className="builder-selection-slot">
              <div className="builder-slot-label">Packaging</div>
              <div 
                className="builder-slot-value" 
                style={{ color: selectedPackaging ? 'var(--color-champagne-gold)' : 'var(--color-text-secondary)' }}
              >
                {selectedPackaging ? `${selectedPackaging.letter} · ${selectedPackaging.name}` : 'Please select packaging above'}
              </div>
            </div>

            <div className="builder-selection-slot">
              <div className="builder-slot-label">Keepsake</div>
              <div 
                className="builder-slot-value" 
                style={{ color: selectedKeepsake ? 'var(--color-champagne-gold)' : 'var(--color-text-secondary)' }}
              >
                {selectedKeepsake ? `${selectedKeepsake.number} · ${selectedKeepsake.name}` : 'Please select keepsake above'}
              </div>
            </div>

            <div className="builder-inclusions-block">
              <h4 className="builder-inclusions-heading">Every Box Includes:</h4>
              <ul className="builder-inclusions-list">
                {INCLUSIONS.map((inc, i) => (
                  <li key={i}>{inc}</li>
                ))}
              </ul>
            </div>

            <p className="builder-note">
              Catalogue-listed inclusions. Final combinations and availability are confirmed during enquiry.
            </p>

            <button 
              type="button" 
              className={`btn ${selectedPackaging && selectedKeepsake ? 'btn-primary' : 'btn-secondary'}`} 
              style={{ width: '100%' }}
              onClick={handleEnquire}
            >
              {selectedPackaging && selectedKeepsake ? 'Enquire About My Signature Box' : 'Enquire With Current Selections'}
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};
