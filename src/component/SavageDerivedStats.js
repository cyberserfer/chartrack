import React from 'react';

const SavageDerivedStats = ({ baseStats } = this.props) => (
            <div>
                <h2>Derived Stats</h2>
                <div>
                    <div>Pace: 6</div>
                    <span style={{ fontSize: '50%' }}>It’s 6 unless you have Edges or Hindrances that modify it</span>
                    <div>Parry: {2 + (baseStats.skills.Fighting / 2)}</div>
                    <span style={{ fontSize: '50%' }}>2 + Half Fighting</span>
                    <div>Toughness: {2 + (baseStats.attributes.Vigor / 2)}</div>
                    <span style={{ fontSize: '50%' }}>2 + Half Vigor</span>
                    <div>Max Encumbrance: {baseStats.derived.maxEncum} </div>
                </div>
            </div>
)
export default SavageDerivedStats;
