# SETRA — Step 6: Scenario Lab

The portfolio now includes an interactive frontend prototype for configuring a dam-break scenario.

## Controls
- Small / Medium / Large breach scenario
- SPH / Delft3D model selection
- Breach width
- Initial water level
- Simulation horizon
- Run / reset controls

## Visual outputs
The scenario preview communicates illustrative values for:
- maximum depth
- peak velocity
- arrival time
- inundated area

These values are **prototype UI calculations**, not validated hydrodynamic simulation results. The component is designed so a future backend/model service can replace the illustrative calculation without changing the presentation layer.
