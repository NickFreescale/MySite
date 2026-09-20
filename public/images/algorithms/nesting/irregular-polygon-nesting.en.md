# Automatic Nesting of Irregular 2D Polygons

## Abstract

Automatic nesting of irregular two-dimensional polygons is an important optimization problem in manufacturing, with applications in textiles, leather, metalworking, and paper production. The objective is to arrange irregular parts efficiently on a sheet of material, maximizing utilization and minimizing waste. The problem is NP-complete and computationally demanding, so satisfactory solutions usually combine several algorithms.

Drawing on academic papers and open-source projects, this report describes the implementation workflow and examines two complementary layers: outer optimization algorithms and underlying no-fit polygon (NFP) algorithms. It discusses their principles, characteristics, and applications.

## 1. Introduction

### 1.1 Problem Definition

Irregular 2D polygon nesting, also called 2D bin packing, places irregular polygonal parts on rectangular or otherwise shaped stock. Part positions and orientations must satisfy three objectives:

1. Every part lies entirely within the stock boundary.
2. Parts do not overlap.
3. Material utilization is maximized, or the number of stock sheets is minimized.

### 1.2 Applications

- **Textiles:** optimizing garment cutting layouts.
- **Leather:** cutting leather goods.
- **Metalworking:** optimizing sheet-metal cutting.
- **Paper production:** maximizing paper utilization.
- **Glass:** optimizing glass cutting layouts.

### 1.3 Computational Complexity

The problem is NP-complete, and its search space grows rapidly with the number of parts. For *n* parts there are *n!* possible placement orders, with multiple possible orientations for each part adding further complexity.

## 2. Implementation Workflow

A complete nesting workflow consists of the following stages.

### 2.1 Data Preprocessing

1. **Standardize geometric data.** In this project, the input consists of 2D projections of 3D models onto the XY plane.
   - Convert CAD or other geometric data into polygon representations.
   - Discretize curved boundaries into polygonal approximations.
   - Calculate area, perimeter, centroid, and other basic properties.
2. **Extract part features.**
   - Compute the minimum bounding rectangle (MBR).
   - Extract shape-complexity measures.
   - Compute convex hulls and concavity information.
3. **Process constraints.**
   - Specify allowed rotations, such as 0°, 90°, 180°, and 270°, or allow continuous rotation.
   - Define minimum clearances between parts.
   - Handle part priorities and grouping constraints.

### 2.2 Generate an Initial Solution

1. **Choose a part ordering strategy.**
   - Descending area, placing larger parts first.
   - Aspect ratio.
   - Shape-complexity measures.
2. **Choose an initial placement strategy.**
   - Bottom-left fill (BLF).
   - Center-oriented clustering.
   - Best fit.
   - Random placement.

### 2.3 Optimize the Layout

1. **Apply an outer optimization algorithm.**
   - Determine the placement order.
   - Optimize part orientations.
   - Search globally for the best layout.
2. **Perform underlying NFP calculations.**
   - Determine non-overlapping placement regions.
   - Select exact placement positions.
   - Detect overlaps and resolve conflicts.

### 2.4 Evaluate and Refine the Result

1. **Calculate performance measures.**
   - Material utilization = total part area / material area used.
   - Layout length for strip materials.
   - Computation time and convergence behavior.
2. **Apply post-processing improvements.**
   - Local search.
   - Small adjustments to part positions.
   - Gap-filling optimization.

## 3. Outer Optimization Algorithms

The outer algorithm searches for a good overall layout, primarily by optimizing part order and rotation angles.

### 3.1 Genetic Algorithm (GA)

#### 3.1.1 Principle

A genetic algorithm simulates biological evolution. Selection, crossover, and mutation progressively improve a population of candidate solutions.

#### 3.1.2 Application to Nesting

**Encoding**

- Permutation encoding represents placement order as a sequence of integers.
- Angle encoding represents each part's orientation as a real number or discrete value.

**Fitness functions**

The fitness function depends on the bin geometry and placement strategy.

1. **Rectangular bin with bottom-left fill**

   ```text
   fitness = α × material_utilization
           + β × compactness
           + γ × (1 / layout_height)
           - δ × unplaced_part_penalty
   ```

   Suitable for rectangular stock of fixed width, where the objective is to minimize layout height.

2. **Strip bin with horizontal placement**

   ```text
   fitness = α × material_utilization
           + β × (1 / layout_length)
           + γ × compactness
           - δ × unplaced_part_penalty
   ```

   Suitable for roll materials such as textiles and film, where the objective is to minimize strip length.

3. **Fixed rectangular bin with center-oriented clustering**

   ```text
   fitness = α × material_utilization
           + β × compactness
           + γ × (1 / centroid_dispersion)
           - δ × unplaced_part_penalty
   ```

   Suitable for fixed-size sheets, maximizing utilization while maintaining a compact layout.

4. **Irregular bin with contour fitting**

   ```text
   fitness = α × material_utilization
           + β × boundary_fit
           + γ × compactness
           - δ × unplaced_part_penalty
   ```

   Suitable for irregular stock, where how well parts follow the bin boundary also matters.

5. **Circular bin with center-oriented clustering**

   ```text
   fitness = α × material_utilization
           + β × (1 / radial_dispersion)
           + γ × compactness
           + ε × boundary_utilization
           - δ × unplaced_part_penalty
   ```

   Suitable for circular stock, such as circular steel or glass sheets. The objective is to maximize utilization while clustering parts toward the center.

6. **Multiple-bin optimization**

   ```text
   fitness = α × overall_material_utilization
           + β × (1 / number_of_bins_used)
           + γ × load_balance
           - δ × unplaced_part_penalty
   ```

   Suitable for batch optimization across multiple bins, reducing the number of bins used and balancing their loads.

The terms have the following meanings:

- **Material utilization:** total area of placed parts divided by total material area used.
- **Layout height or length:** the bounding dimensions of the current layout.
- **Compactness:** a measure of gaps between parts, such as the reciprocal of mean nearest-neighbor distance.
- **Centroid dispersion:** variance of the distances from part centroids to the layout center.
- **Radial dispersion:** variance of the distances from part centroids to a circular bin's center, measuring central clustering.
- **Boundary utilization:** the proportion of part area near the boundary of a circular bin.
- **Boundary fit:** how closely parts follow an irregular bin boundary.
- **Load balance:** how evenly parts are distributed among bins.
- **Unplaced-part penalty:** a penalty for parts that could not be placed.

**Unplaced-part penalty**

```text
unplaced_part_penalty = Σ(w_i × A_i × P_i)
```

- `w_i`: weight assigned to unplaced part *i*.
- `A_i`: area of unplaced part *i*.
- `P_i`: priority coefficient, increasing the penalty for important parts.

The weights α, β, γ, δ, and ε are adjusted to the bin geometry and placement strategy, usually through experiments or domain expertise.

**Genetic operators**

- Selection: roulette-wheel or tournament selection.
- Crossover: order crossover (OX) or partially matched crossover (PMX).
- Mutation: insertion or inversion.

#### 3.1.3 Improvements

Ren Xicong and Cao Peng (2019) proposed an improved adaptive genetic algorithm with:

- Adaptive crossover and mutation probabilities.
- Elitism.
- Parallel evolution of multiple populations.

**Reference:** Ren Xicong and Cao Peng. *Optimization of Irregular Label Nesting Based on an Improved Adaptive Genetic Algorithm*. Packaging Engineering, 2019. In Chinese.

### 3.2 Simulated Annealing (SA)

#### 3.2.1 Principle

Simulated annealing imitates the annealing of metals. A temperature parameter balances global exploration with local search.

#### 3.2.2 Workflow

1. Initialize temperature `T₀` and solution `S₀`.
2. Generate a neighboring solution `S′`.
3. Calculate the energy difference: `ΔE = f(S′) - f(S)`.
4. Accept the new solution if `ΔE < 0`; otherwise accept it with probability `exp(-ΔE/T)`.
5. Reduce the temperature and repeat steps 2–4 until the stopping criterion is met.

#### 3.2.3 Key Parameters

- **Initial temperature:** `T₀ = -ΔE_avg / ln(P₀)`, where `P₀` is the initial acceptance probability.
- **Cooling schedule:** `T_(k+1) = α × T_k`, with `α ∈ [0.8, 0.99]`.
- **Neighborhood moves:** swap two parts in the placement order or change a part's orientation.

### 3.3 Ant Colony Optimization (ACO)

#### 3.3.1 Principle

Ant colony optimization models ant foraging behavior, using pheromone trails to guide the search.

#### 3.3.2 Nesting Model

**Pheromone definitions**

- `τ_ij(t)`: pheromone strength at time *t* for placing part *i* before part *j*.
- `η_ij`: heuristic information derived from part geometry.

**Transition rule**

```text
P_ij^k(t) = [τ_ij(t)]^α × [η_ij]^β
          / Σ([τ_il(t)]^α × [η_il]^β)
```

**Pheromone update**

```text
τ_ij(t+1) = (1-ρ) × τ_ij(t) + Δτ_ij
```

#### 3.3.3 Research Findings

Chen Xiaoyu (2011) proposed an ant-search nesting algorithm based on the lowest contour line:

- It combines lowest-contour placement with ant colony optimization.
- Pheromones use the aspect ratios and areas of rectangular parts.
- The approach substantially improves nesting efficiency.

**Reference:** Chen Xiaoyu. *Research on Automatic Optimal Nesting Algorithms for Two-Dimensional Irregular Parts*. Dissertation, Dalian University of Technology, 2011. In Chinese.

### 3.4 Deep Reinforcement Learning (DRL)

#### 3.4.1 Problem Model

The nesting problem is modeled as a Markov decision process:

- **State space S:** the current layout, including placed-part positions and remaining parts.
- **Action space A:** selection of the next part and its orientation.
- **Reward R:** based on material utilization and layout compactness.
- **Policy π:** a mapping from states to actions.

#### 3.4.2 Network Architecture

**Actor-critic architecture**

- The actor outputs an action probability distribution.
- The critic estimates state value.
- An encoder-decoder structure handles sequences of variable length.

**Feature extraction**

- Geometry: area, perimeter, and aspect ratio.
- Shape: vectors of distances from the centroid to the contour.
- Position: the spatial distribution of the current layout.

#### 3.4.3 Training Strategy

The multitask DRL method proposed by Zeng Huanrong and Shang Huiliang (2022):

- Predicts part order and rotation angles together.
- Represents polygon shapes using centroid-to-contour distances.
- Reports nesting improvements of 5%–10% over traditional heuristics.

**Reference:** Zeng Huanrong and Shang Huiliang. *Two-Dimensional Irregular Polygon Nesting Based on Deep Reinforcement Learning*. Computer Systems & Applications, 2022, 31(2): 124–132. In Chinese.

## 4. Underlying NFP Algorithms

The no-fit polygon (NFP) is a core concept in nesting. It describes relative positions at which two polygons touch without overlapping.

### 4.1 NFP Fundamentals

#### 4.1.1 Definition

For polygons A and B, the NFP describes the positions of a reference point on A as A moves in contact with B without overlapping it. This geometric boundary is used to distinguish overlapping and non-overlapping placements.

#### 4.1.2 Mathematical Representation

```text
NFP(A, B) = {p | A(p) ∩ B = ∅ and A(p) touches B}
```

Here, `A(p)` denotes polygon A translated to position *p*. In this contact-boundary expression, non-overlap refers to the polygon interiors; boundary contact is allowed.

### 4.2 Convex Decomposition

#### 4.2.1 Principle

Decompose concave polygons into convex pieces, compute NFPs for the pieces, and combine the results.

#### 4.2.2 Steps

1. **Detect concavity:** identify concave vertices.
2. **Triangulate:** split each concave polygon into triangles.
3. **Merge convex pieces:** combine adjacent triangles into larger convex polygons.
4. **Compute NFPs:** calculate an NFP for each pair of convex pieces.
5. **Combine results:** use Boolean operations to merge the NFPs.

#### 4.2.3 Advantages and Limitations

**Advantages**

- Handles complex concave polygons.
- Produces accurate geometric results.
- Can be parallelized relatively easily.

**Limitations**

- Decomposition may produce many small polygons.
- Merging can be computationally expensive.
- The approach can be unnecessarily complex for simple polygons.

### 4.3 Moving-Collision Method

#### 4.3.1 Principle

Move polygon A around polygon B and record contact positions to construct the NFP boundary.

#### 4.3.2 Workflow

1. **Initialize:** place A outside B.
2. **Trace the boundary:** move A along B while maintaining contact.
3. **Detect collisions:** monitor the contact state in real time.
4. **Record the path:** track the reference point on A.
5. **Construct the NFP:** connect the recorded points into a boundary.

#### 4.3.3 Key Techniques

**Collision detection**

- Separating axis theorem (SAT).
- Gilbert–Johnson–Keerthi (GJK) algorithm.
- Boundary intersection tests.

**Numerical stability**

- Control floating-point precision.
- Handle degenerate configurations.
- Treat boundary cases explicitly.

### 4.4 Minkowski Sum Method

#### 4.4.1 Mathematical Basis

The Minkowski sum is defined as:

```text
A ⊕ B = {a + b | a ∈ A, b ∈ B}
NFP(A, B) = B ⊕ (-A)
```

`-A` is polygon A reflected through the origin. Here the NFP is represented by the configuration-space region bounded by the contact curve.

#### 4.4.2 Implementation

1. **Preprocess:** reflect A through the origin to obtain `-A`.
2. **Enumerate vertices:** consider the vertices of B and `-A`.
3. **Add vectors:** calculate sums for candidate vertex pairs.
4. **Calculate the convex hull:** construct the hull of the resulting points for convex inputs.
5. **Refine the boundary:** remove redundant points and simplify its representation.

#### 4.4.3 Optimization

**Computation**

- Use convexity to simplify calculations.
- Apply incremental convex-hull algorithms.
- Calculate vector sums in parallel.

**Precision**

- Use rational arithmetic to avoid floating-point errors.
- Implement robust geometric predicates.
- Handle degeneracies.

### 4.5 Orbiting Method

#### 4.5.1 Principle

Construct the NFP by following the trajectory of a reference vertex on A as it moves relative to B.

#### 4.5.2 Implementation

1. **Select a reference point:** choose a characteristic vertex on A.
2. **Scan the boundary:** slide A along B while maintaining contact.
3. **Trace the trajectory:** record the complete reference-point path.
4. **Handle orientation:** account for clockwise and counterclockwise vertex order.
5. **Check closure:** verify that the path forms a closed polygon.

#### 4.5.3 Characteristics

**Time complexity:** `O(mn)`, where *m* and *n* are the vertex counts of the two polygons.

**Robustness**

- Can handle internal cavities.
- Accommodates degenerate geometric cases.
- Provides good numerical stability.

**Suitability**

- Particularly suitable for convex polygons.
- Requires special handling for concave polygons.
- Efficient for real-time applications.

#### 4.5.4 Research Findings

The Huawei Cloud technical material discussed in this report describes the orbiting method as efficient and robust for complex polygons, particularly for real-time industrial nesting.

**Source:** Huawei Cloud Community. *Introduction to Nesting Algorithms for Irregular 2D Parts*. [Huawei Cloud Community](https://bbs.huaweicloud.com/). In Chinese.

## 5. Algorithm Comparison and Selection

### 5.1 Outer Optimization Algorithms

| Algorithm | Convergence | Global search | Parameter sensitivity | Implementation | Typical application |
| --- | --- | --- | --- | --- | --- |
| Genetic algorithm | Moderate | Strong | Moderate | Moderate | Large problems |
| Simulated annealing | Slow | Strong | High | Simple | Precision-oriented optimization |
| Ant colony optimization | Moderate | Moderate | High | Complex | Combinatorial optimization |
| Deep reinforcement learning | Fast after training | Strong | Low | Complex | Learned decisions |

### 5.2 NFP Algorithms

| Algorithm | Complexity | Accuracy | Robustness | Implementation | Typical geometry or use |
| --- | --- | --- | --- | --- | --- |
| Convex decomposition | O(n³) | High | Moderate | Complex | Complex concave polygons |
| Moving collision | O(n²) | High | Moderate | Moderate | General polygons |
| Minkowski sum | O(n²) | High | High | Complex | Theoretical research |
| Orbiting | O(mn) | Moderate | High | Simple | Real-time applications |

### 5.3 Selection Guidelines

**Problem size**

- Small problems, fewer than 50 parts: simulated annealing with orbiting.
- Medium problems, 50–200 parts: a genetic algorithm with moving collision.
- Large problems, more than 200 parts: deep reinforcement learning with convex decomposition.

**Accuracy and responsiveness**

- High accuracy: Minkowski sum.
- Moderate accuracy: moving collision.
- Real-time requirements: orbiting.

**Computing resources**

- Ample resources: deep reinforcement learning.
- Limited resources: a heuristic combined with orbiting.

## 6. Open-Source Projects and Tools

### 6.1 Open-Source Projects

#### 6.1.1 SVGNest

- **Repository:** [Jack000/SVGnest](https://github.com/Jack000/SVGnest).
- **Language:** JavaScript.
- **Features:** browser-based SVG nesting optimized with a genetic algorithm.
- **NFP implementation:** geometric calculations using Clipper.

#### 6.1.2 Nest2D

- **Repository:** [tamasmeszaros/libnest2d](https://github.com/tamasmeszaros/libnest2d).
- **Language:** C++.
- **Features:** a high-performance 2D nesting library supporting multiple optimization algorithms.
- **Implementation:** combines NFP algorithms and optimization strategies.

#### 6.1.3 pynest2d

- **Repository:** [Ultimaker/pynest2d](https://github.com/Ultimaker/pynest2d).
- **Language:** Python.
- **Features:** Python bindings for Nest2D for easier integration and extension.
- **Applications:** prototyping and algorithm validation.

### 6.2 Commercial Software

#### 6.2.1 Optitex

- Professional garment CAD software.
- Integrated nesting algorithms.
- Support for complex constraints.

#### 6.2.2 Gerber AccuNest

- Industrial nesting software.
- Support for multiple material types.
- High-precision NFP calculations.

### 6.3 Research Platforms

#### 6.3.1 ESICUP

- European research group for cutting and packing.
- Standard benchmark datasets.
- Regular algorithm competitions.

#### 6.3.2 OR-Library

- Standard datasets for operations research.
- Nesting instances at multiple scales.
- A basis for comparing algorithm performance.

## 7. Conclusions

Irregular 2D polygon nesting is a complex combinatorial optimization problem that benefits from multiple algorithms and engineering techniques.

### 7.1 Layered Algorithm Design

Separating outer optimization from geometric NFP computation is an effective strategy:

- The outer layer handles global optimization and decisions.
- The underlying layer performs geometry calculations and enforces constraints.
- Combining the layers balances efficiency and accuracy.

### 7.2 Flexible Algorithm Selection

Different applications call for different combinations:

- Problem size determines acceptable computational complexity.
- Accuracy requirements influence the NFP method.
- Real-time requirements constrain the optimization strategy.

### 7.3 Development Directions

- Artificial intelligence is expected to play an increasing role.
- Multi-objective optimization and real-time interaction are important areas of development.
- Engineering implementation and industrial adoption remain essential.

### 7.4 Practical Value

The application examples discussed in the report indicate that advanced nesting algorithms can:

- Improve material utilization, typically by 5%–15%.
- Reduce layout preparation from hours to minutes.
- Deliver significant economic benefits, including annual savings of several million yuan in some applications.

### 7.5 Further Research

Continued work is needed to:

- Improve computational efficiency and accuracy.
- Strengthen robustness and stability.
- Extend the range of supported problems and applications.
- Support industrial adoption and technology transfer.

Continued research and practical development can bring irregular 2D nesting to more industries and support digital and intelligent manufacturing.

## References

English titles below are translations of the Chinese references in the original report.

1. Zeng Huanrong and Shang Huiliang. *Two-Dimensional Irregular Polygon Nesting Based on Deep Reinforcement Learning*. Computer Systems & Applications, 2022, 31(2): 124–132. In Chinese.
2. Ren Xicong and Cao Peng. *Optimization of Irregular Label Nesting Based on an Improved Adaptive Genetic Algorithm*. Packaging Engineering, 2019. In Chinese.
3. Chen Xiaoyu. *Research on Automatic Optimal Nesting Algorithms for Two-Dimensional Irregular Parts*. Dissertation, Dalian University of Technology, 2011. In Chinese.
4. Zhu Xiaoxiao. *Research on Two-Dimensional Nesting Optimization Based on Rectangular Envelopes*. Dissertation, Huazhong University of Science and Technology, 2019. In Chinese.
5. Tong Degang. *Research on Two-Dimensional Irregular Shape Nesting Based on Critical Polygons*. Dissertation, Dalian University of Technology, 2008. In Chinese.
6. Huawei Cloud Community. *Introduction to Nesting Algorithms for Irregular 2D Parts*. [Huawei Cloud Community](https://bbs.huaweicloud.com/). In Chinese.
7. Burke, E. K., Hellier, R., Kendall, G., & Whitwell, G. (2006). A new bottom-left-fill heuristic algorithm for the two-dimensional irregular packing problem. *Operations Research*, 54(3), 587–601.
8. Bennell, J. A., & Oliveira, J. F. (2008). The geometry of nesting problems: A tutorial. *European Journal of Operational Research*, 184(2), 397–415.
9. Gomes, A. M., & Oliveira, J. F. (2006). Solving irregular strip packing problems by hybridising simulated annealing and linear programming. *European Journal of Operational Research*, 171(3), 811–829.
10. Jakobs, S. (1996). On genetic algorithms for the packing of polygons. *European Journal of Operational Research*, 88(1), 165–181.

---

**Original report date:** July 2024

**Version:** 1.0

**About this report:** Based on publicly available academic papers, technical documents, and open-source project material, this report provides a reference for research and practical applications of irregular 2D polygon nesting.
